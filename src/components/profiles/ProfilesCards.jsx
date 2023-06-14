import React ,{ useState }from 'react'
import './profilesCardsStyles.css'
import TinderCard from 'react-tinder-card'

function ProfilesCards() {

  const [photoMatch, setPhotoMatch] = useState([
    {
      nombre: 'Maria Derk',
      url: 'https://scontent.fepa11-1.fna.fbcdn.net/v/t1.18169-9/21369352_10214146375710991_463526446234258413_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=174925&_nc_eui2=AeG46u0lZiwrHvh3CfsxqCQZ4FdyM1r4fsngV3IzWvh-ydt0La9sLFPIV6HPuFBhy9Y&_nc_ohc=6ycoAdWU2FwAX-8NLkk&_nc_ht=scontent.fepa11-1.fna&oh=00_AfCOmMSPf3OpghMLIIHM2Y3ivkiXDObwQx_lJdh-9Zz_sA&oe=64B1A0D5'
    },
    {
      nombre: 'German Pagano',
      url: 'https://scontent.fepa11-1.fna.fbcdn.net/v/t39.30808-6/317913900_10230755018045568_230103605573242008_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeEysec5S4vLgUv5HIVOCC1HYfmRtyq_mzJh-ZG3Kr-bMhLjpsszw4DvFPA3FJdCvO0&_nc_ohc=oS0RrMXOzskAX81yvqE&_nc_ht=scontent.fepa11-1.fna&oh=00_AfD1uzxIN2hjVTQlRfbHCZFNjTPHnDKYYIGhOORwqielGg&oe=64900BB0'
    },
  ]);

  return (
    <div className='cards-profiles'>
        <div className='container-cards'>

          {photoMatch.map( p => (
              <TinderCard
                className='swipe'
                key={p.nombre}
                preventSwipe={['up','down']}
              >
                <div className='card-tinder'
                      style={{backgroundImage:`url(${p.url})`}}
                >
                  <h2>{p.nombre}</h2>
                </div>
              </TinderCard>
          ))}
        </div>
    </div>
  )
}

export default ProfilesCards
