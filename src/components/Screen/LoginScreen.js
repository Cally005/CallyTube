import React from 'react';
// import './loginScreen.scss';
import { useDispatch} from 'react-redux'
import { login } from '../../redux/actions/auth.action'

const LoginScreen = () => {

const dispatch = useDispatch()

const handleLogin = () => {
dispatch(login())

}

  return (
    <div className='login'>
      <div className='login__container'>
        <img 
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/502px-Logo_of_YouTube_%282015-2017%29.svg.png?20200109235614' 
          alt=''
        />
        <button onClick={handleLogin}>Sign in with Google</button>
        <p>Enjoy the Experience</p>
        <p>By Cally005</p>
      </div>
    </div>
  );
};

export default LoginScreen;






































// import React from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// // import { login } from '../../redux/actions/auth.action'

// import './loginScreen.scss'
// import { selectUserEmail, selectUserName, setActualUser, setUserLogOutState } from '../../redux/userSlice/userSlice'
// import { auth, provider } from '../../firebase'


// const LoginScreen = () => {

// const dispatch = useDispatch()

// const userName = useSelector(selectUserName)
// const userEmail = useSelector(selectUserEmail)



// const handleLogin = () => {
//  auth.signInWithPopUp(provider).then((result) =>{
//   dispatch(setActualUser({
//     userName: result.user.displayName,
//     userEmail: result.user.email

//   }))

//   })
//  }

//    //send the action to the reducer

//    const handleLogOut = () =>{
//   auth.signOut().then(()=>{
//     dispatch(setUserLogOutState())
//   }).catch((err)=>alert(err.message))
//     //send the action to the reducer
//  }
 
//   return (
//     <div className='login'>
//       <div className='login__container'>
//         <img 
//         src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/502px-Logo_of_YouTube_%282015-2017%29.svg.png?20200109235614'  alt=''
       
//         />
//         {
//           userName ? (
//         <button  onClick={handleLogOut}>  Sign out </button>
        
//         ):(
//           <button  onClick={handleLogin}> Sign in with Google </button>
//         )
        
        
//         }
//           <p>Enjoy the Experience</p>
//           <p>By Cally005</p>
//         <p></p>
//       </div>
//     </div>
//   )

// }

// export default LoginScreen


// import React from 'react';
// import { useDispatch } from 'react-redux';
// import { login } from '../../redux/actions/auth.action';
// import './loginScreen.scss';

// const LoginScreen = () => {
//   const dispatch = useDispatch();

//   const handleLogin = async () => {
//     try {
//           await dispatch(login()); // Dispatch the login action
//     } catch (error) {
//       // Handle any errors
//       console.error("Error logging in:", error);
//     }
//   };

//   return (
//     <div className='login'>
//       <div className='login__container'>
//         <img 
//           src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/502px-Logo_of_YouTube_%282015-2017%29.svg.png?20200109235614' 
//           alt=''
//         />
//         <button onClick={handleLogin}>Sign in with Google</button>
//         <p>Enjoy the Experience</p>
//         <p>By Cally005</p>
//       </div>
//     </div>
//   );
// };

// export default LoginScreen;





























// import React from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// // import { login } from '../../redux/actions/auth.action'

// import './loginScreen.scss'
// import { selectUserEmail, selectUserName, setActualUser, setUserLogOutState } from '../../redux/userSlice/userSlice'
// import { auth, provider } from '../../firebase'


// const LoginScreen = () => {

// const dispatch = useDispatch()

// const userName = useSelector(selectUserName)
// const userEmail = useSelector(selectUserEmail)



// const handleLogin = () => {
//  auth.signInWithPopUp(provider).then((result) =>{
//   dispatch(setActualUser({
//     userName: result.user.displayName,
//     userEmail: result.user.email

//   }))

//   })
//  }

//    //send the action to the reducer

//    const handleLogOut = () =>{
//   auth.signOut().then(()=>{
//     dispatch(setUserLogOutState())
//   }).catch((err)=>alert(err.message))
//     //send the action to the reducer
//  }
 
//   return (
//     <div className='login'>
//       <div className='login__container'>
//         <img 
//         src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/502px-Logo_of_YouTube_%282015-2017%29.svg.png?20200109235614'  alt=''
       
//         />
//         {
//           userName ? (
//         <button  onClick={handleLogOut}>  Sign out </button>
        
//         ):(
//           <button  onClick={handleLogin}> Sign in with Google </button>
//         )
        
        
//         }
//           <p>Enjoy the Experience</p>
//           <p>By Cally005</p>
//         <p></p>
//       </div>
//     </div>
//   )

// }

// export default LoginScreen


