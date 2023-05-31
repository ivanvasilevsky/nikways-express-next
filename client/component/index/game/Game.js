import Image from "next/image";

export default function Game() {
  return (
    <div className="game">
      <Image className="game__wave" src="/ui/game_top.svg" width={1920} height={200} alt="wave" />
      <Image className="game__wave" src="/ui/game_bottom.svg" width={1920} height={200} alt="wave" />

      <div className="container">
        <div className="game__inner">
          <div className="game__block">
            <Image className="game__image" src="/icons/gamepad.png" width={608} height={580} alt="gamepad" quality={95}/>

            <h2 className="game__title">Сыграй в игру <br/> и получи <span>Бонус</span></h2>

            <a href="" className="btn btn__more game__btn">
              <span>Начать игру</span>
              <Image src="/icons/arrow_more_r.svg" width={6} height={12} alt="arrow" />
            </a>
            <p className="game__subtitle">это займет 5 минут*</p>
            <p className="game__desc">Описание: тут должно быть краткое описание игры, которое описывает действия происходящие в ней</p>

          </div>
        </div>
      </div>
    </div>
  )
}