import React from "react";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

function UserForm() {
  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      channel: "safaintreal",
      age: 0,
      date: new Date(),
    },
  });
  const {
    register,
    control,
    handleSubmit,
    formState,
    watch,
    getValues,
    setValue,
    isValid,
    isDirty
  } = form; // handleSubmit is used for form submission
  const { errors } = formState;

  const onSubmit = (data) => {
    console.log("Form submitted ", data); // with the help of handleSubmit, we get the data submitted by user into our console
  };
  
  const onError =(errors)=>{
    console.log("form errors: ", errors);
    
  }

  const watchName = watch("name");

  const handleGetValues = () => {
    console.log("Values: ", getValues());
  };

  const handleSetValues = () => {
    // set values and also set the dirty and touch fields
    console.log(
      "Set Values: ",
      setValue("name", "saf", {
        shouldValidate: true,
        shouldDirty: true,
        shouldTouch: true,
      })
    );
  };

  return (
    <div>
      <h2>Watched value: {watchName}</h2>
      <form onSubmit={handleSubmit(onSubmit, onError)} noValidate> 
        {" "}
        {/*noValidate to let react-hook-form validate instead of the browser*/}
        {/* replace property name with {...register("value of name property")} */}
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          placeholder="name"
          {...register("name", {
            required: {
              // to make sure when required filed is true, that is no username is entered, the desired msg is displayed
              value: true,
              message: "Username required",
            },
            
          })}
        />
        <p>{errors.name?.message}</p>
        <br />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          placeholder="email"
          {...register("email", {
            disabled: watch("name")==="",  // make sure email is disabled until name entered
            pattern: {
              // for a strict pattern such as safalya123@gmail.com for mails
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "Invalid email format",
            },
            validate: {
              // validate consists of key-value pairs to set our custom validation rules
              notAdmin: (fieldValue) => {
                return (
                  fieldValue !== "admin@gmail.com" ||
                  "Enter a different mail as this one is reserved"
                );
              },
              notBlackListed: (fieldValue) => {
                return (
                  !fieldValue.endsWith("disalloweddomain.com") ||
                  "This domain is not supported"
                );
              },
            },
          })}
        />
        <p>{errors.email?.message}</p>
        <br />
        <label htmlFor="channel">Channel</label>
        <input
          type="text"
          id="channel"
          placeholder="channel"
          {...register("channel")}
        />
        <p>{errors.channel?.message}</p>
        <br />
        <label htmlFor="age">Age</label>
        <input
          type="number"
          id="age"
          placeholder="age"
          {...register("age", {
            valueAsNumber: true,
            required: {
              // to make sure when required filed is true, that is no username is entered, the desired msg is displayed
              value: true,
              message: "Age required",
            },
          })}
        />
        <p>{errors.age?.message}</p>
        <br />
        <label htmlFor="dob">DOB</label>
        <input
          type="date"
          id="dob"
          placeholder="dob"
          {...register("dob", {
            valueAsDate: true,
            required: {
              // to make sure when required filed is true, that is no username is entered, the desired msg is displayed
              value: true,
              message: "Date of birth required",
            },
          })}
        />
        <p>{errors.dob?.message}</p>
        <br />
        <button type="submit" >Submit</button>
        <button type="button" onClick={handleGetValues}>
          Get values
        </button>
        <br />
        <button type="button" onClick={handleSetValues}></button>
      </form>
      <DevTool control={control} />
    </div>
  );
}

export default UserForm;
