import Faces from "../Components/facesFeed/FacesFeed"
import InfoFeed from "../Components/facesFeed/infoFeedBack"
import HomeLayout from "../layout/HomeLayout"
import '../Components/facesFeed/facesFeed.scss'

export const FeedBack = () => {
    return (
        <HomeLayout>

            <div className=" flex flex-col items-center">
                <InfoFeed />
                <Faces />
            </div>
        </HomeLayout>
    )
}