import {
  Descriptions,
  SuperHost,
  TypeHost,
  Ratings,
  Title,
  Wrapper,
  Images,
  H1,
  HeadWrap
} from "./DescriptionElements";
import { AiFillStar } from "react-icons/ai";
import StayData from "../../Data/Data.json";

const Description = () => {
  return (
    <>
      <div>
        <HeadWrap>
          <H1>Stays in Finland</H1>
          {StayData.length !== 0 && <div>{StayData.length}+ Stays</div>}
        </HeadWrap>

        <Descriptions>
          {StayData.map((data, index) => {
            return (
              <div key={index}>
                <Images src={data.photo} alt={data.type} />
                <Wrapper>
                  {data.superHost === true ? (
                    <SuperHost>SUPER HOST</SuperHost>
                  ) : null}

                  <TypeHost>
                    {data.type}. {data.beds} Beds
                  </TypeHost>

                  <Ratings>
                    <AiFillStar style={{ color: "red" }} />
                    {data.rating}
                  </Ratings>
                </Wrapper>
                <Title>{data.title}</Title>
              </div>
            );
          })}
        </Descriptions>
      </div>
    </>
  );
};

export default Description;
