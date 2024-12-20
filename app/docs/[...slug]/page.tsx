import React from 'react';


const Docs = ({ params }: { params: { slug: string[] } }) => {
  
  return (
    <div>
      
      {params.slug.length === 2 ? (
        <div>
          Viewing docs and feature {params.slug[0]} and concept {params.slug[1]}
        </div>
      ) : params.slug.length === 1 ? (
        <div>
          Viewing docs and feature {params.slug[0]} and concept not available
        </div>
      ) : (
        <div>Invalid number of parameters</div>
      )}
    </div>
  );
};

export default Docs;
