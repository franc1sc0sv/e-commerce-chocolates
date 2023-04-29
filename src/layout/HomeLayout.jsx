import Header from "../Components/Header"
export default function HomeLayout({children}){
    return (
        <>
        <Header />
        {children}
        </>
    )
}