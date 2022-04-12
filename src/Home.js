import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import { Formik,Field,Form ,ErrorMessage} from 'formik';
import * as yup from 'yup';
const Home = () => {
 const [User,setUser]=useState([])
  const defaultValue={
    name:"",
    email:'',
    password:"",
    gender:"",
    termsCondition:false,
    ColorSelect:''
    
  }
    const {
        register,
        formState: { errors },
        handleSubmit,
      } = useForm();
      const submit = (data) => {
        console.log("data", data);
      };
      const handleSave=(value)=>{
        console.log("value",value)
        const item=[...User]
        item.push(value)
        setUser(item)

      }
      function validationEmail(value){
        let error ;
        if(!value){
          error="Email is Required"
        }
       else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
           error="please Check Your Email"
        }
        return error;

      }
      const validationSchema=
      yup.object().shape({
        name:yup.string().required("Name is Required").min(4,"Enter Valid Name").max(25,"Maximum 25 Character"),
        email:yup.string().required("Email is Required")
        // .
        // email("Enter Valid Email")
        ,
        password:yup.string().required("Password is Required"),
       gender:yup.string().required("Gender is Required"),
       termsCondition:yup.boolean().oneOf([true],"Please Accept Terms And Condition"),
       ColorSelect:yup.string().required("Please Select Colour"),

      })
        
      console.log("User",User)
    return (
        <div>
          
          <div className='example'>
          <div>
        <form onSubmit={handleSubmit(submit)}>
        <h1>React-Hooks-Form</h1>
            <input
              type="text"
              name="name"
              placeholder="Enter User Name"
              {...register("name", { required: true, maxLength: 10, 
                pattern:/^[A-Z]+[A-Za-z]+$/i}
              )}
            />
            <br />
            <p className="error">
              {errors.name?.type === "required" && "First name is required"}
            </p>
            <p className="errors">
              {errors.name?.type === "pattern" && "First name is pattern "}
            </p>
            <p className="errors">
              {errors.name?.type === "maxLength" && "First Name Max Lenght 10"}
            </p>
           
            <input
              type="text"
              name="last"
              placeholder="Enter User Last"
              {...register("last", { required: true, pattern: /^[A-Za-z]+$/i })}
            />
            <br />
            <p className="error">
              {errors.last?.type === "required" && "Last name is required"}
            </p>
            <p className="errors">
              {errors.last?.type === "pattern" && "Valid Last Name"}
            </p>
    
            
            <input
              type="number"
              name="age"
              placeholder="Enter User Age"
              {...register("age", { required: true, min: 18, max: 99 })}
            />
            <br />
            <p className="error">
              {errors.age?.type === "required" && "Age  is Required"}
            </p>
            <p className="errors">{errors.age?.type === "min" && " min Age 18"}</p>
            <p className="errors">{errors.age?.type === "max" && " max Age 99"}</p>
    
           
            <input
              type="text"
              name="email"
              placeholder="Enter User Email"
              {...register("email", {
                required: true,
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                },
              })}
            />
            <p className="error">
              {errors.email?.type === "required" && "Email Address is required"}
            </p>
            <p className="errors">
              {errors.email?.type === "pattern" && "must add Valid email"}
            </p>
            <div>
           
              <input
                type="password"
                name="password"
                placeholder="Enter User Password"
                {...register("password", {
                  required: true,
                  pattern: /^[A-Za-z0-9]+$/i,
                  max:10
                })}
              />
              <p className="error">
                {errors.password?.type === "required" && "Password  Required"}
              </p>
              <p className="errors">
                {errors.password?.type === "pattern" && "Valid Password"}
              </p>
              <p className="errors">
                {errors.password?.type === "max" && "Maximum 10 "}
              </p>
            </div>
            <div>
           
              <input
                type="address"
                name="address"
                placeholder="Enter User Address"
                {...register("address", {
                  required: true,
                  pattern: /^[A-Za-z0-9]+$/i,
                })}
              />
              <p className="error">
                {errors.password?.type === "required" && "Address  Required"}
              </p>
              <p className="errors">
                {errors.password?.type === "pattern" && "Valid Address"}
              </p>
            </div>
            <div>
           
              <input
                type="number"
                name="number"
                placeholder="Enter User Contact"
                {...register("number", {
                  required: true,
                  minLength: 10,
                  maxLength: 10,
                })}
              />
              <p className="error">
                {" "}
                {errors.number?.type === "required" && "Number Required"}
              </p>
              <p className="errors">
                {" "}
                {errors.number?.type === "minLength" && "Enter Valid Mobile Number"}
              </p>
            </div>
            <div>
           
              <input
                type="number"
                name="number"
                placeholder="Enter Pin Code"
                {...register("number", {
                  required: true,
                  minLength: 6,
                  maxLength: 6,
                  pattern:/^[0-9]+$/i
                })}
              />
              <p className="error">
                {" "}
                {errors.number?.type === "required" && "PinCode Required"}
              </p>
              <p className="errors">
                {" "}
                {errors.number?.type === "minLength" && " Max lenght 6"}
              </p>
              <p className="errors">
                {" "}
                {errors.number?.type === "pattern" && "Enter Only Number"}
              </p>
            </div>
         
            <select {...register("gender", { required: true })}>
              <option>select</option>
              <option value="male">male</option>
              <option value="female">female</option>
              <option value="other">others</option>
            </select>
            <br />
            <p className="error">
              {errors.gender?.type.value === "required" && "Select gender"}
            </p>
            <input id="checkbox" type="checkbox" {...register("checkbox", { required: true })} />
            <label for="checkbox"> I Agree To These<a href="#">Terms And Conditons</a>.</label>
            <p className="error">
                {" "}
                {errors.checkbox?.type === "required" && "Please Agree Terms And Conditons "}
              </p>
            <br/>
            <input type="submit" />
          </form>
           </div>
         
           <div>
             <h1>React Formik And Yup Form</h1>
           <Formik initialValues={defaultValue} onSubmit={handleSave} validationSchema={validationSchema}>
            
             <Form>
               
               <Field  type="text" name="name" placeholder="Enter Your Name"/><br/>
               <p><ErrorMessage name="name"/></p>
               <Field  type="text" name="email" validate={validationEmail} placeholder="Enter Your Email"/><br/>
               <p><ErrorMessage name="email"/></p>
               <Field  type="text" name="password" placeholder="Enter Your Password"/>
               <p><ErrorMessage name="password"/></p>
               <Field component="select"  name="gender">
                <option value="" disabled>Please Select Option</option>
                <option value="male">Male</option>
                <option value="female">Female</option>

               </Field><br/>
               <p><ErrorMessage name="gender"/></p>
               <label>
                 <Field type="checkbox" name="termsCondition">

                 </Field>
                  I Accept<a href='#'> Terms And Conditons</a>
               </label><br/>
               <p><ErrorMessage name="termsCondition"/></p>
               <div>
                 <label>
                   <Field type="radio" name="ColorSelect" value="red" ></Field>
                   Red
                 </label>
                 <label>
                   <Field type="radio" name="ColorSelect" value="green" ></Field>
                   Green
                 </label>
                 <p><ErrorMessage name="ColorSelect"/></p>
               </div><br/>
            
               <button type='submit'>Save</button>
             </Form>
           </Formik>
           </div>
          </div>
        </div>
      );
    }
    

export default Home