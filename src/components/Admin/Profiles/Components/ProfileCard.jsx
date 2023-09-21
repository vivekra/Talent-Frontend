import React from 'react'

const ProfileCard = () => {
  return (
    <div className="col-span-12 md:col-span-6 xl:col-span-4 bg-gradient-to-tr from-green-200 to-blue-300 hover:from-pink-300 hover:to-yellow-300 hover:shadow-2xl rounded-xl p-2">
        <div className="d-flex justify-center items-center flex-col gap-2">
          <div className="head"></div>
          <div className="body d-flex justify-center flex-col items-center">
            <img src="/images/profile.jpg" alt="profile image" className="aspect-square w-20 rounded-full" />
            <h1 className="text-lg font-semibold p-0 m-0">Alaspravinkumar Rajamani</h1>
            <h1 className="text-xs pb-1">alaspersonal115@gmail.com</h1>
            <span className="bg-orange-400 text-slate-100 px-2 rounded-xl text-sm">ReactJS Developer</span>
          </div>
          <div className="footer">
            <button className="btn border bg-green-400 px-4 py-2 rounded-2xl text-sm">Profile</button>
          </div>
        </div>
      </div>
  )
}

export default ProfileCard