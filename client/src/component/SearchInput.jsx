import { IoSearch } from "react-icons/io5";

function SearchInput() {
  return (
    <div>
      <form className="flex bg-transparent items-center gap-2">
        <input type='text' placeholder="Search" className="input input-bordered rounded-full bg-transparent"/>
        <button type="submit" className="btn btn-circle bf-sky-500 text-white text-xl">
        <IoSearch />
            </button> 
      </form>
    </div>
  )
}

export default SearchInput
