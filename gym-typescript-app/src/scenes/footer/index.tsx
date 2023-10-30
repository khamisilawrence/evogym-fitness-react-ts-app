import Logo from "@/assets/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img alt="Logo" src={Logo} />
          <p className="my-5">
            Lorem ipsum a arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque.
          </p>
          <p>© Evogym All Rights Reserved.</p>
        </div>
        <div></div>
        <div></div>
      </div>
    </footer>
  )
}

export default Footer