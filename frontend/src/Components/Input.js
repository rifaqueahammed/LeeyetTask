import React from 'react'

function Input({ label, type, placeholder,value }) {
  return (
    <div className="flex flex-col w-full gap-2">
    <div className="flex justify-between">
      <label  className="font-semibold capitalize">
        {label}
      </label>
    </div>
    <input
      type={type}
      className="w-full p-5 font-medium border rounded-md  placeholder:opacity-60"
      placeholder={placeholder}
      value={value}
    />
  </div>
  )
}

export default Input
