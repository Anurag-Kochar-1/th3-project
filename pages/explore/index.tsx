import { collection, getDocs } from 'firebase/firestore'
import Link from 'next/link'
import React from 'react'
import PostCard from '../../components/globalComponents/Posts/PostCard/PostCard'
import ExploreTabs from '../../components/pageWiseComponents/explore/ExploreTabs/ExploreTabs'
import { IPost } from '../../customTypesAndInterfaces/Posts/postInterface'
import { db } from '../../firebaseConfig'

interface IProps {
  allPostsArray: IPost[]
}

const Index = ({ allPostsArray }: IProps) => {
  return (
    <main className='w-full lg:w-[70%] h-[80vh] lg:h-[90vh] mt-[10vh] mb-[10vh] lg:mb-0 bg-BrutalPurple2 flex flex-col justify-start items-center overflow-x-hidden overflow-y-scroll scrollbar-hide'>

      <ExploreTabs />

      <div className='w-full flex flex-col justify-start items-center my-14 space-y-5'>
          {allPostsArray && (
            allPostsArray.map((postData: IPost) => {
              return <PostCard postData={postData} key={postData?.postID} postedAt={"explorePostsPage"} />
            })
          )}
      </div>


    </main>
  )
}

export default Index



export const getServerSideProps = async () => {

  // fetching all posts 
  const allPostsArray: IPost[] = []
  const postCollectionRef = collection(db, "posts")
  const data = await getDocs(postCollectionRef)

  data?.forEach((post) => {
    allPostsArray.push(post?.data() as IPost)
  })


  return {
    props: {
      allPostsArray
    }
  };
}

