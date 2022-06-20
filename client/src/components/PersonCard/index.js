import { Box, Image } from "@chakra-ui/react";
import PersonImage from '../../images/personimage.png'

export default function PersonCard({personInfo : { firstName,lastName,age }}) {


    return (
        <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden' position="relative">
        <Image src={PersonImage} alt="Person Image" />
        <div className="abs-center">
        <div>{`${firstName} ${lastName}`}</div>
        <div>{age}</div>
        </div>
        </Box>
    )
}