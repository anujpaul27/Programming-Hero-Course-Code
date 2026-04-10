import Link from "next/link";

const PhoneLayout = ({children}) => {
    return (
        <div>
            <div>
                <Link href={'/contract/phone/01646267167'}>Airtel</Link>
            </div>
            {children}
        </div>
    );
};

export default PhoneLayout;