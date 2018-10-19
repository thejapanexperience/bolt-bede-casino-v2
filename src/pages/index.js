// Packages
import React from 'react'
<<<<<<< HEAD
import Layout from '../components/Layout'
// import { Data as UnstyledData } from 'tlob-library'
=======
import Layout from '../components/layout'
import { Data as UnstyledData } from 'tlob-library'
import GamesList from '../components/GamesList'

const gamesDummyData = [
  {
    "title": "Fairy Light Forest",
    "imageUrl": "https://az868739.vo.msecnd.net/configuration/30bc9423-ac8f-4fa4-8b93-58f15e90635a.jpg"
  },
  {
    "title": "Michael's Dream Land",
    "imageUrl": "https://az868739.vo.msecnd.net/configuration/6c304175-4c48-4bed-951e-45970b392844.jpg"
  }
]
>>>>>>> Initial beginnings of the GamesList component

const IndexPage = () => (
  <Layout>
    Back in the 90's I was in a very famous tv show ... Whoa-OOOO-Oh
    {/* Leave the below commented out so we can turn it on to check out the data in the store. Ta */}
    {/* <UnstyledData /> */}
    <GamesList games={gamesDummyData} />
  </Layout>
)

export default IndexPage
