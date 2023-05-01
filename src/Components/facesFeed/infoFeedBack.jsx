export default function InfoFeed({ controller }) {
  return (
    <>
      <p className="flex mb-8 text-5xl font-bold text-primary">
        Brindanos tu opinión para mejorar
      </p>

      <textarea
        {...controller}
        cols="80"
        rows="10"
        placeholder="Dinos tu opinion"
        className=" flex mb-8 border-primary border-2 resize-none rounded focus:border-[#414052] transition-all duration-[500ms] ease-in-out outline-none p-[0.5rem]"
      ></textarea>
    </>
  );
}
