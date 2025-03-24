import {
    Button,
    Flex,
    FormControl,
    FormLabel,
    Input,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Radio,
    RadioGroup,
    Textarea,
    useDisclosure,
    useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { BiAddToQueue } from "react-icons/bi";

const CreateUserModal = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()


    return (
        <>
            <Button onClick={onOpen}>
                <BiAddToQueue size={20} />
            </Button>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <form
                // onSubmit={handleCreateUser}
                >
                    <ModalContent>
                        <ModalHeader> My new BFF 😍 </ModalHeader>
                        <ModalCloseButton />

                        <ModalBody pb={6}>
                            <Flex alignItems={"center"} gap={4}>
                                {/* Left */}
                                <FormControl>
                                    <FormLabel>Full Name</FormLabel>
                                    <Input
                                        placeholder='John Doe'
                                    // value={inputs.name}
                                    // onChange={(e) => setInputs({ ...inputs, name: e.target.value })}
                                    />
                                </FormControl>

                                {/* Right */}
                                <FormControl>
                                    <FormLabel>Role</FormLabel>
                                    <Input
                                        placeholder='Software Engineer'
                                    // value={inputs.role}
                                    // onChange={(e) => setInputs({ ...inputs, role: e.target.value })}
                                    />
                                </FormControl>
                            </Flex>

                            <FormControl mt={4}>
                                <FormLabel>Description</FormLabel>
                                <Textarea
                                    resize={"none"}
                                    overflowY={"hidden"}
                                    placeholder="He's a software engineer who loves to code and build things."
                                // value={inputs.description}
                                // onChange={(e) => setInputs({ ...inputs, description: e.target.value })}
                                />
                            </FormControl>

                            <RadioGroup defaultValue="male" mt={4}>
                                <Flex gap={5}>
                                    <Radio
                                        value='male'
                                    // onChange={(e) => setInputs({ ...inputs, gender: e.target.value })}
                                    >
                                        Male
                                    </Radio>
                                    <Radio
                                        value='female'
                                    // onChange={(e) => setInputs({ ...inputs, gender: e.target.value })}
                                    >
                                        Female
                                    </Radio>
                                </Flex>
                            </RadioGroup>
                        </ModalBody>

                        <ModalFooter>
                            <Button colorScheme='blue' mr={3} type='submit'
                            // isLoading={isLoading}
                            >
                                Add
                            </Button>
                            <Button onClick={onClose}>Cancel</Button>
                        </ModalFooter>
                    </ModalContent>
                </form>
            </Modal>
        </>
    )
}

export default CreateUserModal