import "../Components/facesFeed/facesFeed.scss";

import Faces from "../Components/facesFeed/FacesFeed";
import InfoFeed from "../Components/facesFeed/infoFeedBack";
import HomeLayout from "../layout/HomeLayout";

import { useController, useForm } from "react-hook-form";
import { useFeed } from "../hooks/useFeed";

import { useContext, useEffect } from "react";
import { AlertsContext } from "../context/AlertsContext";

export const FeedBack = () => {
  const { setOpen, setSeverity, setMessage } = useContext(AlertsContext);
  const { isLoading, error, feedProceso } = useFeed();

  const { handleSubmit, control, reset } = useForm();

  const { field: area } = useController({
    control,
    name: "comentario",
    defaultValue: "",
    rules: { required: true },
  });
  const { field: radio } = useController({
    control,
    name: "rating",
    rules: { required: true },
  });

  const succesSubmit = (datos) => {
    feedProceso({ datos, reset });
  };

  useEffect(() => {
    if (error && !isLoading) {
      setOpen(true);
      setMessage(error);
      setSeverity("warning");
    }
  }, [isLoading, error]);

  return (
    <HomeLayout>
      <form
        className="flex flex-col items-center "
        onSubmit={handleSubmit(succesSubmit)}
      >
        <InfoFeed controller={area} />
        <Faces controller={radio} isLoading={isLoading} />
      </form>
    </HomeLayout>
  );
};
