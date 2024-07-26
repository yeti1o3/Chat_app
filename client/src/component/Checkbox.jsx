function Checkbox(props) {
    const {checked,setChecked}=props;
  return (
    <div className="flex">
       <div className="form-control">
            <label className="label cursor-pointer">
            <span className="label-text text-slate-800 mr-2">Male</span>
            <input type="checkbox" checked={checked==="male"?"checked":""} className="checkbox checkbox-primary" onChange={()=>(setChecked("male"))}/>
            </label>
        </div>
        <div className="form-control">
            <label className="label cursor-pointer">
            <span className="label-text text-slate-800 mr-2">Female</span>
            <input type="checkbox"  checked={checked==="female"?"checked":""} className="checkbox checkbox-primary" onChange={()=>{setChecked("female")}}/>
            </label>
        </div>
    </div>
  )
}

export default Checkbox
