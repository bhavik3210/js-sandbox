import * as React from "react";
import "./style-sessions.css";
import {gql, useQuery} from "@apollo/client"
import useParams from "react"

// below is a fragment that can be reused 
const SPEAKER_ATTRIBUTES = gql`
  fragment SpeakerInfo on Speaker {
    id
    name
    bio
    sessions {
      id
      title
    }
  }
`;

/* ---> Define queries, mutations and fragments here */
const SPEAKERS = gql`
  query speakers {
    speakers {
      ...SpeakerInfo
    }
  }
  ${SPEAKER_ATTRIBUTES}
`;

const SPEAKER_BY_ID = gql`
  query speakerById($id: ID!) {
    speakerById(id: $id) {
      ...SpeakerInfo
    }
    ${SPEAKER_ATTRIBUTES}
  }
`

const SpeakerList = () => {

  /* ---> Replace hardcoded speaker values with data that you get back from GraphQL server here */
  const featured = false;
  const { loading, error, data} = useQuery(SPEAKERS);

  if(loading) return <p>Loading speakers...</p>
  if (error) return <p> ERROR!  Something went wrong</p>

  return data.speakers.map(({id, name, bio, sessions}) => (
    <div
      key={id}
      className="col-xs-12 col-sm-6 col-md-6"
      style={{ padding: 5 }}
    >
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title">{"Speaker: "+name}</h3>
        </div>
        <div className="panel-body">
          <h5>{'Bio: ' + bio}</h5>
        </div>
        <div className="panel-footer">
          <h4>Sessions</h4>
					{
						sessions.map((session) => (
              <p>{session.title}</p>
            ))
					}
          <span>	
            <button	
              type="button"	
              className="btn btn-default btn-lg"	
              onClick={()=> {
                /* ---> Call useMutation's mutate function to mark speaker as featured */
              }}	
              >	
                <i	
                  className={`fa ${featured ? "fa-star" : "fa-star-o"}`}	
                  aria-hidden="true"	
                  style={{	
                    color: featured ? "gold" : undefined,	
                  }}	
                ></i>{" "}	
                Featured Speaker	
            </button>	
          </span>
        </div>
      </div>
    </div>
  ))

};

const SpeakerDetails = () => {

  const { speaker_id } = useParams(); 

  const { loading, error, data } = useQuery(SPEAKER_BY_ID, {
    variables: {
      id: speaker_id
    },
  });

  if (loading) return <p>Loading Speaker...</p>
  if (error) return <p>Error Loading Speakers!</p>

  const speaker = data.speakerById;
  const { id, name, bio, sessions } = speaker;
    /* ---> Replace hardcoded speaker values with data that you get back from GraphQL server here */
  return (
    <div key={'id'} className="col-xs-12" style={{ padding: 5 }}>
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title">{'name'}</h3>
        </div>
        <div className="panel-body">
          <h5>{'bio'}</h5>
        </div>
        <div className="panel-footer">
          {{
						/* ---> Loop through speaker's sessions here */
					}}
        </div>
      </div>
    </div>
  );
};

export function Speaker() {
  return (
    <>
      <div className="container">
        <div className="row">
          <SpeakerDetails />
        </div>
      </div>
    </>
  );
}


export function Speakers() {
  return (
    <>
      <div className="container">
        <div className="row">
          <SpeakerList />
        </div>
      </div>
    </>
  );
}

	
