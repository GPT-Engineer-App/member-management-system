import React from "react";
import { Box, Button, Container, Divider, Heading, Stack, Text, VStack, Input, Textarea, HStack, Avatar, Spacer } from "@chakra-ui/react";
import { FaPlus, FaUserEdit, FaUserTimes, FaPaperPlane } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" py={10}>
      <VStack spacing={6}>
        {/* Admin Dashboard Heading */}
        <Heading as="h1" size="xl">
          Admin Dashboard
        </Heading>

        {/* User Management */}
        <Box w="full" p={5} borderWidth="1px" borderRadius="lg">
          <Heading as="h2" size="lg" mb={3}>
            User Management
          </Heading>
          <Divider mb={3} />
          <HStack spacing={3} mb={3}>
            <Input placeholder="Search users..." />
            <Button leftIcon={<FaPlus />} colorScheme="blue">
              Add User
            </Button>
          </HStack>
          <Text>Users list will be displayed here...</Text>
        </Box>

        {/* Announcements */}
        <Box w="full" p={5} borderWidth="1px" borderRadius="lg">
          <Heading as="h2" size="lg" mb={3}>
            Announcements
          </Heading>
          <Divider mb={3} />
          <Textarea placeholder="Write an announcement..." />
          <Button mt={3} leftIcon={<FaPaperPlane />} colorScheme="teal">
            Send Announcement
          </Button>
        </Box>

        {/* Member to Admin Chat */}
        <Box w="full" p={5} borderWidth="1px" borderRadius="lg">
          <Heading as="h2" size="lg" mb={3}>
            Member Chat
          </Heading>
          <Divider mb={3} />
          {/* Chat messages would go here */}
          <Stack spacing={4}>
            <Box p={3} bg="gray.100" borderRadius="md">
              <HStack spacing={3}>
                <Avatar size="sm" src="https://images.unsplash.com/photo-1624561172888-ac93c696e10c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtZW1iZXIlMjBhdmF0YXJ8ZW58MHx8fHwxNzA5MDE0NzMwfDA&ixlib=rb-4.0.3&q=80&w=1080" />
                <Text fontWeight="semibold">John Doe:</Text>
                <Text>Hi there, I have a question...</Text>
              </HStack>
            </Box>
            {/* Add more messages here */}
          </Stack>
          <HStack mt={4}>
            <Input placeholder="Type a message..." />
            <Button colorScheme="blue" leftIcon={<FaPaperPlane />}>
              Send
            </Button>
          </HStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
