import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import React from "react";

export default function Form({
  onFormSubmit,
  register,
  handleSubmit,
  watch,
  formState: { errors },
}) {
  console.log(watch("firstName")); // watch input value by passing the name of it
  console.log(watch("lastName")); // watch input value by passing the name of it
  console.log(watch("age")); // watch input value by passing the name of it

  return (
    <div style={{ width: 200, margin: "auto" }}>
      <form onSubmit={handleSubmit(onFormSubmit)}>
        <FormControl isInvalid={errors.firstName}>
          <FormLabel htmlFor="firstName">First name</FormLabel>
          <Input
            id="firstName"
            placeholder="First Name"
            {...register("firstName", {
              required: "This is required",
              minLength: { value: 4, message: "Minimum length should be 4" },
            })}
          />
          <FormErrorMessage>
            {errors.firstName && errors.firstName.message}
          </FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={errors.lastName}>
          <FormLabel htmlFor="lastName">Last name</FormLabel>
          <Input
            id="lastName"
            placeholder="Last Name"
            {...register("lastName", {
              required: "This is required",
              minLength: { value: 4, message: "Minimum length should be 4" },
            })}
          />
          <FormErrorMessage>
            {errors.lastName && errors.lastName.message}
          </FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={errors.age}>
          <FormLabel htmlFor="age">Age</FormLabel>
          <Input
            type="number"
            id="age"
            placeholder="Age"
            {...register("age", {
              required: "This is required",
              min: 0,
            })}
          />
          <FormErrorMessage>
            {errors.age && errors.age.message}
          </FormErrorMessage>
        </FormControl>

        <Button mt={4} colorScheme="teal" type="submit">
          Submit
        </Button>

     
      </form>
    </div>
  );
}
