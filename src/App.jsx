import X_follow from "./X_follow"

const users = [
  {
    userName: 'luisb1995',
    name: 'Luis Betin',
    isFollowing: true
  },
  {
    userName: 'jesusm05',
    name: 'Jesus Morales.',
    isFollowing: false
  },
  {
    userName: 'josef123',
    name: 'jose fernandez',
    isFollowing: false
  },
  {
    userName: 'Tomas1405',
    name: 'Tomas alfonzo',
    isFollowing: false
  }
]

function App() {

  return (
    <>
       <section className='App'>
        {
          users.map(({ userName, name, isFollowing }) => (
            <X_follow
              key={userName}
              userName={userName}
              initialIsFollowing={isFollowing}
            >
              {name}
            </X_follow>
          ))
        }
  </section>
    </>
  )
}

export default App
