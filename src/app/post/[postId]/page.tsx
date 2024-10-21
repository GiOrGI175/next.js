'use client';

const MyPostId = ({
  params,
}: {
  params: {
    postId: string;
  };
}) => {
  console.log(params);
  return (
    <div>
      <h2>my post id is {params.postId}</h2>
    </div>
  );
};

export default MyPostId;
