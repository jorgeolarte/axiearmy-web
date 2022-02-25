import Ronin from "./Ronin";

export default function Info({ team, name, ronin, bio, city, country }) {
  return (
    <>
      <div className='flex flex-col md:flex-row justify-between items-start gap-10 flex-nowrap'>
        <div className='grow text-2xl'>
          <h2 className='font-medium'>{team}</h2>
          <span className='font-light'>{name}</span>
        </div>
        <Ronin ronin={ronin} />
      </div>
      <div className='font-thin'>
        <p>{country}</p>
        <p className='text-purple'>{city}</p>
      </div>
      <div>
        <p className='font-thin'>{bio}</p>
      </div>
    </>
  );
}
