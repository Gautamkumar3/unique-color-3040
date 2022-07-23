import React, { useState } from 'react'
import { createContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import { useEffect } from 'react';

export const AuthContext = createContext()

const AuthContextProvider = ({ children }) => {

    const navigate = useNavigate()
    // const url = " http://localhost:8100/users"


    // ######### State Management ############## 
    const [name, setName] = useState("")
    const [mobile, setMobile] = useState("")
    const [data, setData] = useState([])
    const [number, setNumber] = useState(0)
    const [pin, setPin] = useState("");
    const [sData, setSdata] = useState({
        email: "", f_name: "",
        l_name: ""
    })
    const [signupData, setSignupData] = useState(sData)
    const [state, setState] = useState({ isAuth: false })


    //################# signupPage function are here ###############

    const handlePin = (value) => {
        setPin(value)
    }

    const handleInput = (e) => {
        const { name, value } = e.target;
        setSdata({ ...sData, [name]: value })
    }

    const verifyOtp = async () => {
        if (pin == "123456") {
            if (sData.email === "") {
                alert("fill email id")
            } else if (sData.f_name === "") {
                alert("fill first name")
            } else if (sData.l_name === "") {
                alert("fill last name")
            } else {

                setSignupData({ ...sData })
                setName(sData.f_name)
                if (name !== "") {
                    navigate("/")
                    alert("success")
                }

            }
        } else {
            alert("fail")
        }
    }

    // ############### handle input data ##############

    const handleInputMobile = (e) => {
        setNumber(e.target.value)
    }

    useEffect(() => {
        axios.get("https://gautam-server.herokuapp.com/users").then((res) => {
            setData(res.data)
        })
    }, [])




    const handleOtp = () => {
        if (number.length < 10) {
            alert("Please enter valid mobile number")
        } else {
            axios.post("https://gautam-server.herokuapp.com/users", {
                mob: number,
                name: "Gautam"
            }).then(res => {
                if (data.length > 0) {
                    let flag = false;
                    data.map((item) => {
                        if (item.mob === res.data.mob) {
                            flag = true;
                            return;
                        }
                    })
                    if (flag === false) {
                        setMobile(res.data.mob)
                        setState({ ...state, isAuth: true })
                        setTimeout(() => {
                            navigate("/signup")
                        }, 1000)


                    } else {
                        setMobile(res.data.mob)
                        setState({ ...state, isAuth: true })
                        navigate("/signin")

                    }
                }

            }).catch(er => {
                console.log(er)
            })
        }
    }

    //   ############### State management for login and logout ################ 
    const handleLogin = () => {
        setSdata({ ...state, isAuth: true })
    }
    const handleLogout = () => {
        setSdata({ ...state, isAuth: false })

    }

    // ############### Cart function manage ################# 

    const addToCart = (item) => {
        axios.post("https://netmeds-new-api.herokuapp.com/cart", item).then((res) => {
            // console.log(res)
        }).then((er) => {
            console.log(er)
        })
    }


    return (
        <AuthContext.Provider value={{ pin, handlePin, verifyOtp, handleInput, handleInputMobile, handleOtp, mobile, name, state, handleLogin, handleLogout, addToCart }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;
