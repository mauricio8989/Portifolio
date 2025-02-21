import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  height: 100%;
  color: #fff;
  display: flex;
  flex-direction: column;
  gap: 24px;

  .even {
      background-color: #2C243B;
      img{
        max-width: 350px;
        max-height: 350px;
        border-radius: 50%;
        border: 5px solid #9955E8;
        display: block;
        margin: 0 auto ;
      }
    }
  .contact{
    margin-bottom: 40px;
    img{
      width: 160px;
      border-radius: 50%;
      border: 5px solid #9955E8;
      border-right: transparent;
      margin-bottom: 40px;
      @media (min-width: 720px) {
        margin: auto;
      }
    }
    div p a{
      text-decoration: none;
      color: #7BFFAF;
    }
    .socials{
      display: flex;
      gap: 8px;
      a{
        padding: 12px;
        color: #fff;
        background-color: #413A4F;
        text-decoration: none;
        font-size: 24px;
        border-radius: 8px;
        margin: 0;
        padding-bottom: 0;
        :hover{
          background-color: #171023;
        }
      }
    }
  }
  @media (min-width: 1300px){
    max-width: 1300px;
    width: 100%;
    margin: 0 auto;
    .even {
      background-color: #2C243B;
      border-radius: 16px;

    }
  }
  .projects{
    text-align: center;
    h3{
      margin-bottom: 40px;
    }
    .graphic-top, .graphic-bottom{
      display: none;
    }

    @media (min-width: 1024px) {
      position: relative;
      .graphic-top{
        display: block;
          width: 62px;
          height: 64px;
          position: absolute;
          top: 112px;
          left: 44px;
        }
        .graphic-bottom{
          display: block;;
          width: 62px;
          height: 64px;
          position: absolute;
          bottom: 112px;
          right: 44px;
        }
    }
  }

  @media (max-width: 680px) {
    section:nth-child(2){
      display: flex;
      flex-direction: column-reverse;
    }
  }

  @media (min-width: 681px) {
    .projects{
      display: flex;
      flex-direction: column;
      .project{
        width: 380px;
      }
      .project-list{
        max-width: 100%;
        display: flex;
        gap: 32px;
        padding: 0 80px 80px 80px;

        @media(max-width: 1180px) {
          padding: 30px;
          display: grid;
          grid-template-columns: 1fr 1fr;
        }

        @media(max-width: 880px) {
          display: flex;
          flex-direction: column;
          .project{
            width: 100%;
          }

        }

      }
    }
  }

`
export const Section = styled.section`
  padding: 48px 24px;
  background-color: transparent;
  position: relative;
  img{
    width: 100%;
    margin: 0 auto;
  }
  .arrow{
    width: 100px;
    position: absolute;
    left: 50%;
    top: 80%;
    z-index: 1;
  }
  h2{
    font-size: 40px;
    font-family: 'Kalam', cursive;
    font-weight: 400;
    background: linear-gradient(to right, #9955E8, #7BFFAF);
    background: linear-gradient(to right, #9955E8, #7BFFAF, #7BFFAF);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    margin-bottom: 24px;
  }
  h3{
    font-size: 24px;
    letter-spacing: 1px;
    line-height: 32px;
  }
  p{
    color: #CDD0D4;
    line-height: 24px;
    margin-top: 16px;
    letter-spacing: 1px;
  }
  .about{
    margin-top: 40px;
    .float-techs{
      display: flex;
      gap: 16px;
      font-size: 24px;
      color: #9955E8;
      margin-bottom: 24px;
    }
  }

  span{
    color: #7DFFAF;
    font-family: 'Kalam', cursive;
    font-weight: 400;

  }

  .floating{
    transform: translate(0, 15px);
		animation: floating 4s ease-in-out infinite;
  }

  @media (min-width:680px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    img{
      max-width: 490px;
      margin: auto;
    }
    div{
      margin: auto;
    }
  }

  @media (max-width: 680px){
    .arrow{
      top: 96%;
    }
  }
  @keyframes floating {
		0% {
			transform: translate(0, 15px);
		}
		50% {
			transform: translate(0, 0);
		}
		100% {
			transform: translate(0, 15px);
		}
	}

`
