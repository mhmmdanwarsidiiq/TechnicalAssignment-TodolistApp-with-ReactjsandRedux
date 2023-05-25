import { Button, Flex, FormControl, Input } from "@chakra-ui/react"
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/actions";

export const AddTodo = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addTodo(value));
    setValue('');
  }

  const handleInput = e => {
    setValue(e.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <Flex>
        <FormControl>
          <Input
            type="text"
            placeholder="What to do"
            value={value}
            onChange={handleInput}
            borderTopRightRadius={0}
            borderBottomRightRadius={0}
          />
        </FormControl>
        <Button
          colorScheme="purple"
          type="submit"
          disabled={!value}
          borderTopLeftRadius={0}
          borderBottomLeftRadius={0}
        >Add</Button>
      </Flex>
    </form>
  )
}