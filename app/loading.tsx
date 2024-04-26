import PageLoading from "@/components/shared/PageLoading";

const Loading = () => {
  return (
    <div className={`w-screen h-screen grid place-content-center bg-white`}>
      <PageLoading />
    </div>
  );
};
export default Loading;
