import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {toggleMenu} from '../utils/appSlice'
import { SEARCH_API } from '../utils/constant'
import { cacheResult } from '../utils/searchSlice'
const Header = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showResult, setShowResult] = useState(false);

  const searchCache = useSelector(store => store.search);
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  }
  const getSearchResults = async () => {
    const data = await fetch(SEARCH_API + searchQuery);
    const response = await data.json();
    setSearchResults(response[1]);
    dispatch(cacheResult({
      [searchQuery]: response[1]
    }))
  }
  const handleSearchQueryChange = (e) => {
    setSearchQuery(e.target.value);
  }

  useEffect(()=> {
    const timer = setTimeout(()=> {
      if (searchCache[searchQuery] ) {
        setSearchResults(searchCache[searchQuery]);
      } else {
        getSearchResults();
      }
     } , 300);

    return ()=> {
      clearTimeout(timer);
    }
  },[searchQuery])
  return (
    <div className='grid grid-flow-col p-5 m-2 shadow-lg'>
        <div className='flex col-span-1'>
            <img alt="menu"
            onClick={toggleMenuHandler}
            className='h-8 mx-2 cursor-pointer'
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAAAVFBMVEX///8AAADy8vKioqL5+fkrKyt0dHTQ0NDT09M2Nja5ubnr6+upqamVlZVSUlLc3Nzi4uLExMRfX19FRUVsbGw+Pj5lZWWNjY2CgoJ6enoLCwsXFxdPKYE2AAACRklEQVR4nO3dC46jMAyAYRa6hVLenc6Uzv3vuaBqZh9STCyt5MT6vxPYSiAhGFMUAAAAAAAAAAAAuTqVSTspUrk2/XL5mazL0jfX2FTa24/k3dqodOo360DjvNXHucwX6yhjXWY/uRxnMy3WEWosk5hMZR2fTiXl0tytw9O5N0IyrXV0Wm04l+vZOjitc3i1GTObZds8G8OXjHVseuGLprYOTS+8DXCVTPNpHZvWZ3iaTYN1cFpDeA9QflgHp9WXwWRcLZrF9G4dnc67uNPMbGikgSmKU1ZXzcfBwcaU0fbsLD/O7Nk8rGOM9TjMZbs/d1lsN++dcFf+Q10lv3gOVcTZzMtpqtuuSlbX1pPmTHNLKGGqRAAAAAAAAID/J+m6RtXBWTnO/XpO1trPY9xB8zYo8/q0Pks+8lznqOEZe+tI4/ThSpNvdTblc8vhi4Am+bcZvw1StdnmulpHqLHK5cCddXw6nZTLmNEk2w3STSCzMgCxEKDM5k3zl0d48Zwy+Ajgb7fw6/Mm+ZX/X0/KGlMllDV6mmaubgCubs2uFk1f2xlXG01fjwCuHs58PTb7OtDwddRUuDoEfA2P9RGshLpGAAAAAAAAWLH+5FeiS8TRh9qOPqH31NzAU9sJTw1BXLVqyawQQGyi46q9UWYDI5c1ZnXF7ISWYK6atblqo+eqEtBVMq6agrpq1+qqka6rRdNX82lXbcGLMZvSud1yUHLmqZV+Ttkc5+Lr9xO+fgxSuPplyy7pqkbqGgEAAAAAAAAAQM5+AbaoXAOXviXAAAAAAElFTkSuQmCC"
            />
            <img alt="youtube-logo"
            className='h-8'
            src="https://i.pinimg.com/736x/cb/f6/4c/cbf64cc832d04af9933737151e268828.jpg"
            />
        </div>
        <div className='col-span-10 px-10'>
          <input className='w-1/2 border border-gray-400 p-2 rounded-l-full' type='text' placeholder='Search'
           onChange={handleSearchQueryChange}
           onFocus={()=>setShowResult(true)}
           onBlur={()=>setShowResult(false)}/>
          <button className='border border-gray-400 p-2 rounded-r-full cursor-pointer bg-gray-100'>search</button>
          {showResult && <div className='w-[700px] shadow-lg rounded-lg py-2 px-5 fixed bg-white border border-gray-100'>
            {searchResults.map((item)=> 
            <span className="block  cursor-pointer hover:bg-gray-100" key={item}>
            {item}
          </span>
            )}

          </div>}
        </div>
        <div className='col-span-1'>
          <img alt='user'
            className='h-8'
          src="https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg"
          />
        </div>
    </div>
  )
}

export default Header
