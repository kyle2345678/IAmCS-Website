import {
    Box,
    Heading,
    Container,
    Text,
    Button,
    Stack,
    Icon,
    createIcon,
} from '@chakra-ui/react';

export function Landing() {
    return (
        <Box backgroundImage="url('/landing_bkg.png')" bgSize='cover' bgPos='center'

            bgImage="linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(23, 0, 35)), url('/landing_bkg.png') "

            bgRepeat='no-repeat' h='80vh'>

            <Container maxW={'3xl'} pt={16}>
                <Stack
                    as={Box}
                    textAlign={'center'}
                    position='relative'
                    spacing={{ base: 8, md: 5 }}
                    py={{ base: 20, md: 36 }}>

                    <Box display={{ sm: 'none', md: 'block' }}>
                        <Icon
                            as={Arrow}
                            color="green.100"
                            w={71}
                            transform={'rotate(240deg)'}
                            position={'absolute'}
                            right={420}
                            top={140}
                        />
                        <Text
                            fontSize={'2xl'}
                            color="green.100"
                            fontFamily={'Oswald'}
                            position={'absolute'}
                            right={480}
                            fontWeight='bold'
                            top={110}
                            transform={'rotate(0deg)'}>
                            Computer Science
                        </Text>
                    </Box>
                    <Heading
                        fontWeight="bold"
                        color='white'
                        fontSize={{ base: '2xl', sm: '4xl', md: '8xl' }}
                        lineHeight={'110%'}>
                        #IAm<Text as={'span'} color={'#F1C232'}>CS</Text> Summit’s

                    </Heading>


                    <Text color={'white'} fontWeight='bold'>
                        NC-wide effort providing students, with an aim at young girls, exposure to computer science and STEM careers. Learn about our 2022 summit below!
                    </Text>

                    <Stack
                        direction={'column'}
                        spacing={3}
                        align={'center'}
                        alignSelf={'center'}
                        position={'relative'}>
                        <Button
                            color='#494949'
                            as='a'
                            href='https://docs.google.com/forms/d/e/1FAIpQLSfur45aXKYR5ubchmDXInsXr9eTPwyl9z06mndVwSOoNlVE5w/formResponse'
                            bg={'#F1C232'}
                            rounded={'full'}
                            px={6}
                            _hover={{
                                bg: '#c9a228',
                            }}
                        >
                            Register for our 2022 Summit!
                        </Button>
                    </Stack>
                </Stack>
            </Container>
        </Box>
    );
}

const Arrow = createIcon({
    displayName: 'Arrow',
    viewBox: '0 0 72 24',
    path: (
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0.600904 7.08166C0.764293 6.8879 1.01492 6.79004 1.26654 6.82177C2.83216 7.01918 5.20326 7.24581 7.54543 7.23964C9.92491 7.23338 12.1351 6.98464 13.4704 6.32142C13.84 6.13785 14.2885 6.28805 14.4722 6.65692C14.6559 7.02578 14.5052 7.47362 14.1356 7.6572C12.4625 8.48822 9.94063 8.72541 7.54852 8.7317C5.67514 8.73663 3.79547 8.5985 2.29921 8.44247C2.80955 9.59638 3.50943 10.6396 4.24665 11.7384C4.39435 11.9585 4.54354 12.1809 4.69301 12.4068C5.79543 14.0733 6.88128 15.8995 7.1179 18.2636C7.15893 18.6735 6.85928 19.0393 6.4486 19.0805C6.03792 19.1217 5.67174 18.8227 5.6307 18.4128C5.43271 16.4346 4.52957 14.868 3.4457 13.2296C3.3058 13.0181 3.16221 12.8046 3.01684 12.5885C2.05899 11.1646 1.02372 9.62564 0.457909 7.78069C0.383671 7.53862 0.437515 7.27541 0.600904 7.08166ZM5.52039 10.2248C5.77662 9.90161 6.24663 9.84687 6.57018 10.1025C16.4834 17.9344 29.9158 22.4064 42.0781 21.4773C54.1988 20.5514 65.0339 14.2748 69.9746 0.584299C70.1145 0.196597 70.5427 -0.0046455 70.931 0.134813C71.3193 0.274276 71.5206 0.70162 71.3807 1.08932C66.2105 15.4159 54.8056 22.0014 42.1913 22.965C29.6185 23.9254 15.8207 19.3142 5.64226 11.2727C5.31871 11.0171 5.26415 10.5479 5.52039 10.2248Z"
            fill="currentColor"
        />
    ),
});