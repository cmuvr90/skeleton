import Image from "next/image";
import bigBanImg from "../../../public/big-ben.jpg";

export const HomePage = () => {


    return <>
        <Image
            layout="responsive"
            src={bigBanImg}
            alt={'big ban'}
            placeholder={'blur'}
        />
    </>
}