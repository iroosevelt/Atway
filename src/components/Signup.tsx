// components/SignupForm.tsx
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";

const SignupForm: React.FC = () => {
  const [formData, setFormData] = useState({
    // FNAME: "",
    EMAIL: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // e.preventDefault();
    // Add your logic for handling form submission
    console.log("Form submitted:", formData);
  };

  return (
    <Box>
      <form
        action="https://app.us22.list-manage.com/subscribe/post?u=c5a945e6df138a3b2f608e9d8&amp;id=f7ef1d9a52&amp;f_id=003dc2e1f0"
        method="post"
        id="mc-embedded-subscribe-form"
        name="mc-embedded-subscribe-form"
        className="validate"
        target="_blank"

        // action="https://bigtrouper.us21.list-manage.com/subscribe/post?u=6ab51a2ce8e809a128d545abf&amp;id=f71686a2f8&amp;f_id=009cf3e6f0"
        // method="post"
        // id="mc-embedded-subscribe-form"
        // name="mc-embedded-subscribe-form"
        // className="validate"
        // target="_blank"
        // onSubmit={handleSubmit}
      >
        <FormControl mt={4}>
          <Input
            type="email"
            name="EMAIL"
            id="mce-EMAIL"
            required
            value={formData.EMAIL}
            onChange={handleChange}
            placeholder="Email address"
            mt="1rem"
            fontWeight="500"
            fontSize={{ base: "1.3rem", md: "1.5rem" }}
            textAlign="center"
            variant="flushed"
            color="rgba(255, 255, 255, 30%)"
            borderColor="rgba(255, 255, 255, 20%)"
            _placeholder={{
              color: "rgba(255, 255, 255, 24%)",
            }}
            _hover={{
              borderColor: "rgba(255, 255, 255, 30%)",
            }}
            _focus={{
              borderColor: "rgba(255, 255, 255, 40%)",
              outline: "none",
              boxShadow: "none",
            }}
          />
        </FormControl>
        <VStack
          align="center"
          w="100%"
          spacing={{ base: "1rem", md: "1rem" }}
          mt={{ base: "1rem", md: "1rem" }}
        >
          <Button
            type="submit"
            id="mc-embedded-subscribe"
            variant="primary"
            px="3rem"
            h={{ base: "54px", md: "60px" }}
            bgColor="#FFFFFF"
            color="#000000"
            fontSize={{ base: "md", md: "1.0625rem" }}
            fontWeight="500"
            letterSpacing="-0.00938rem"
            rounded="15.66px"
            // textTransform="uppercase"
          >
            Join waitlist
          </Button>
        </VStack>
      </form>
    </Box>
  );
};

export default SignupForm;
