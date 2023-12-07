import '../../public/styles/rules.css'
import Navigation from "../Navigation";

function Rules() {
    return (
        <div className="rules">
            <Navigation/>

            <h1>Правила игры</h1>

            <div>
                <p>
                    Могли бы вы себе представить как это пережить глобальную катастрофу? Думаю что нет... Для этого был создан «Бункер Онлайн!» чтобы вы смогли ощутить как это! Наша игра очень простая, и на изучение правил вам не понадобится много времени! Уже после первой игры вы будете полностью понимать как играть.
                </p>

                <h2>История</h2>
                <p>На земле вот-вот произойдет катастрофа, а может уже и началась!
                    Я, как и большинство людей в панике пытаюсь выжить, и найти укрытие, чтобы спасти свою жизнь. В поисках убежища я увидел группу людей, но не знал что делать... Стоит подойти к ним или нет, ведь опасность сейчас на каждом шагу!
                    Но так как терять было нечего я решил пойти к ним...
                    Как только я начал подходить к людям, я понял, что мне невероятно повезло — все эти люди находились возле бункера на который была последняя надежда!
                    Как оказалось они ждут людей, которым все еще удалось выжить, и разбили временный лагерь...
                    Приняли меня хорошо, но что меня ждет дальше мне было не известно. Все что я понимал, так это то, что предстоит решить, кто действительно заслуживает попасть в бункер, чтобы остаться в живых. Тех, кто не попадет - ждет верная смерть.
                    И тут началась моя история выживания... </p>

                <h2>Обзор</h2>
                <h3>Катаклизм</h3>
                <p>Описание текущего для игры катаклизма. Как это произошло, что случилось и четкое понимание того, с чем связаны проблемы, что даст вам понять в процессе игры кто среди людей вам подходит, а кого нужно выгнать.</p>

                <h3>Бункер</h3>
                <p>Описание найденного бункера. Единственный шанс, чтобы выжить в случае катаклизма - это попасть в бункер. У вас есть информация о времени его постройки, местонахождении и данные о спальных комнатах.
                    Так же вам доступна следующая информация:</p>
                <ul>
                    <li>Размер бункера — общая площадь убежища.</li>
                    <li>Время нахождения — сколько вам потребуется времени, чтобы пережить катастрофу.</li>
                    <li>Количество еды — запас продуктов, которых вам должно хватить на период пребывания в бункере. В случае, если продуктов недостаточно или отсутствуют совсем, игроки будут вынуждены выходить из бункера во время катастрофы, чтобы добыть пищу.</li>
                    <li>В бункере имеется — те вещи, которые находятся внутри бункера и которые могут быть полезны при выживании.</li>

                </ul>
                <p>В зависимости от того, что находится в бункере, вам так же предстоит определить кто из выживших будет более полезен, учитывая данные обстоятельства.</p>

                <h3>Описание персонажа</h3>
                <p>Описание вашего персонажа. Ваш герой состоит из следующих характеристик:</p>
                <ul>
                    <li>Пол</li>
                    <li>Телосложение</li>
                    <li>Человеческая черта</li>
                    <li>Специальность</li>
                    <li>Здоровье</li>
                    <li>Хобби / Увлечение</li>
                    <li>Фобия / Страх</li>
                    <li>Инвентарь</li>
                    <li>Дополнительные сведения</li>
                    <li>Спец. возможность</li>
                </ul>

                <h3>Заметки</h3>
                <p>Место для заметок, которые можно оставлять в процессе игры.</p>

                <h3>Панель ведущего</h3>
                <p>Представляет собой набор функционала для использования специальных и профессиональных возможностей игроков, а так же возможность управлением временным лагерем и таймером.</p>
                <h3>Процесс игры</h3>
                <p>В первом игровом круге все начинается с представления друг друга (см. Раунд игры).</p>
                <p>В процессе знакомства игрок раскрывает свой основной параметр — это специальность (см. Характеристики персонажа), и характеристики в зависимости от количества игроков (см. Количество игроков)</p>
                <p>На это дается каждому игроку по 1 минуте (см. Ваш ход).</p>
                <p>После того как каждый игрок рассказал о своем параметре, игроки получают 1 минуту общего времени на коллективное обсуждение (см. Коллективное обсуждение).</p>
                <p>После этого приходит время голосования. Игроки должны выбрать того, кто покинет временный лагерь и не попадет в бункер. Разглашать еще не открытые параметры в целях переубеждения игроков - запрещается (см. Голосование).</p>
                <p>После голосования начинается следующий игровой круг (раунд) (см. Раунд игры).</p>
                <p>Во всех последующих раундах раскрывается только один параметр, вне зависимости от количества игроков.</p>
                <p>В конце игры игроки, которые попали в бункер, раскрывают свои характеристики. Ведущий подводит итог (см. Победа в игре).</p>

                <h2>Количество игроков</h2>
                <p>Количество людей в бункере ограничено. Так же в зависимости от количества желающих попасть в бункер зависит сколько характеристик нужно открыть в первый раунд игры.</p>

                <table>
                    <tr>
                        <td>Количество игроков</td>
                        <td>Могут попасть в бункер</td>
                        <td>Характеристик в первый раунд (исключая специальность)</td>
                    </tr>
                    <tr>
                        <td>6-7	</td>
                        <td>3</td>
                        <td>3</td>
                    </tr>
                    <tr>
                        <td>8-9	</td>
                        <td>4</td>
                        <td>3</td>
                    </tr>
                    <tr>
                        <td>10-11	</td>
                        <td>5</td>
                        <td>2</td>
                    </tr>
                    <tr>
                        <td>12-13	</td>
                        <td>6</td>
                        <td>1</td>
                    </tr>
                    <tr>
                        <td>14-15</td>
                        <td>7</td>
                        <td>1</td>
                    </tr>
                </table>
                <h2>Раунд игры</h2>
                <p>Первый  раунд ходят по часовой стрелке, начиная с первого игрока который нашел бункер (Цифра в блоке "Желающие попасть в бункер").</p>
                <p>Следующий раунд игроки начинают ходить в обратном порядке, против часовой стрелки.</p>
                <p>Принцип последующих раундов так и продолжается, каждый новый раунд — новый порядок начала хода.</p>
                <p>Когда все игроки сделали свои ходы, ведущий игры (лидер во временном лагере) оглашает результаты голосования (см. Голосование) за исключение игрока из временного лагеря.</p>
                <p>Так продолжается до тех пор, пока не останется допустимое количество игроков (см. Количество игроков) в бункер.</p>
                <h3>Ваш ход</h3>
                <p>Ваш ход — самое время блеснуть! Вам дали время представить своего персонажа.</p>
                <p>Делайте игру интересной, включайте фантазию на максимум и расскажите свою историю!</p>
                <p>Не нужно просто зачитывать свои характеристики без эмоций, так игра будет не интересной.</p>
                <p>Помните — вы любым образом должны попасть в бункер!</p>
                <p>В зависимости от количества игроков, в первый раунд игры вы открываете нужное количество характеристик. (см. Количество игроков)</p>
                <p>Во все последующие ходы вы открываете по одной характеристике за ход (раунд).</p>

                <h3>Коллективное обсуждение</h3>
                <p>Во время общего обсуждения каждый игрок имеет возможность что-то сказать. Здесь нет ограничений на каждого человека. Общее обсуждение длится 1 минуту.</p>

                <h3>Голосование</h3>
                <p>В игре есть голосование за исключение человека из временного лагеря.</p>
                <p>Голосование - обязательный процесс игры. Оно проводится в конце игрового раунда и оглашает голосование ведущий игры, он же лидер в лагере.</p>

                <p>Если большинство игроков решили не голосовать (например недостаточно информации об игроках) в текущем раунде — голосование автоматически объявляется закрытым, и игроки переходят в следующий раунд. В таком случае, в следующем раунде после окончания коллективного обсуждения (см. Коллективное обсуждение), игроки обязательно должны провести голосование. Процесс голосования будет проходить 2 раза, чтобы выгнать сразу 2‑х игроков. Переход в новый раунд без исключения игроков — невозможен.</p>

                <p>Пропускать голосование можно только 1 раз за игру (и не в последнем кругу)!</p>

                <p>Если игроки решили провести голосование, тогда ведущий игры дает каждому игроку по 30 сек. на высказывание перед тем как запустить голосование (очередь идет по порядку от начала таблицы “Желающие попасть в бункер”).</p>
                <p>Время на высказывание вы можете потратить на объяснения за кого нужно проголосовать или же дополнительно защитить себя от голосов против вас, так же вы можете просто дать общий комментарий.</p>
                <p>Игрок может отказаться от высказывания, в таком случае слово переходит к следующему игроку без дополнительного времени.</p>

                <p>После всех высказываний ведущий игры запускает голосование.</p>
                <p>На голосование у игроков есть 15 сек. Так же запрещаются любые комментарии до момента завершения голосования.</p>
                <p>Ведущий игры может принудительно завершить голосование по истечению времени.</p>
                <p>В случае, если игрок нарушает правило тишины - на следующем раунде игрок теряет возможность высказывания перед началом голосования.</p>
                <p>В случае, если игрок не принял участие в голосовании, его голос идет против себя.</p>

                <p>Когда все голоса собраны есть несколько вариантов развития событий:</p>
                <ol>
                    <li>Один игрок набрал большинство голосов — исключение из лагеря, игрок иеет права высказать остальным, все что он о них думает (дается 30 сек.).</li>
                    <li>Несколько игроков получили наибольшее одинаковое количество голосов — каждый из этих игроков получает 30 сек. на оправдание.</li>
                </ol>

                <p>После завершения оправданий каждого из игроков ведущий игры начинает новое голосование с такими же правилами, но кандидатами на вылет становятся только те игроки, которые набрали наибольшее количество голосов в прошлом голосовании.</p>
                <p>Возможные варианты после повторного голосования:</p>
                <ol>
                    <li>Если среди игроков, которые были на оправдании изменилось количество голосов — исключить из лагеря игрока, который набрал больше всех голосов.</li>
                    <li>В случае, если кандидаты на вылет получили одинаковое количество голосов - голосование объявляется закрытым и игроки переходят в следующий круг.</li>
                </ol>

                <h2>Победа в игре</h2>
                <p>По завершению последнего голосования, когда определилось нужное количество людей для прохождения в бункер, игра завершается. Игроки, которые попали в бункер и переживут катаклизм - считаются победителями!</p>
                <p>Остальные игроки так и остаются возле лагеря поскольку искать другой бункер - нет смысла, ведь ситуация с катаклизмом совсем критическая. Некоторые потеряли надежду и решили погибнуть на месте, часть все-таки решила испытать удачу и попытаются выжить без бункера...</p>

                <h2>Подробнее про карточки</h2>
                <h3>Характеристики персонажа</h3>
                <p>У каждого персонажа есть несколько характеристик, которые он получает в начале игры.</p>
                <p>Любой из параметров можно изменить используя специальную возможность, которая это позволяет сделать.</p>

                <h3>Специальная возможность</h3>
                <p>Каждую спец. возможность можно использовать только один раз за игру, но в любой момент игры (после исключения игрока из лагеря - запрещается этому игроку использовать спец. возможности).</p>
                <p>Каждая последующая спец. возможность не имеет привязки к предыдущей спец. возможности, например: если игрок использовал возможность "Аннулировать все специальности", после этого текущий или любой другой игрок может использовать возможность, которая генерирует для всех или для конкретного игрока специальность.</p>
                <p>Их можно использовать в любой момент игры или в зависимости от описания действия.</p>

                <h3>Как использовать спец. возможность?</h3>
                <p>Прежде всего вам нужно сказать, что вы используете спец. возможность (для этого в любой момент игры нужно произнести слова "стоп игра", использую свою спец.возможность).</p>
                <p>После этого игрок зачитывает свою спец. возможность. Ведущий выполняет необходимые изменения.</p>

                <h3>Специальность</h3>
                <p>Специальность — есть специальности, которые дают персонажу дополнительные бонусы (см. Профессиональные возможности). Их можно использовать в любой момент игры или в зависимости от описания действия</p>
                <p>У каждой специальности есть свой стаж работы:</p>

                <ul>
                    <li> Дилетант — до 1 месяца</li>
                    <li> Стажер — от 1 до 3 месяцев</li>
                    <li> Новичок — от 4 месяцев до 1 года</li>
                    <li> Любитель — от 1 до 2 лет</li>
                    <li> Опытный — от 2 до 5 лет</li>
                    <li> Эксперт — от 5 до 10 лет</li>
                    <li> Профессионал — от 10 лет</li>
                </ul>

                <p><strong>Чайлдфри</strong> — статус человека, при котором он категорически против любого участия в продолжении рода. По своей воле человек не будет участвовать в продолжении рода. При попытке насильно заставить или переубедить, человек может получить непоправимую психологическую травму.</p>

                <p>Если женщина в возрасте 50 лет или больше - она не может иметь детей. При телосложении "Хрупкое" или "Ожирение-сильное" - родить она сможет только с помощью специалистов (определенных профессий), которые могут решать проблемы с родами.</p>
                <p>Если мужчина в возрасте 60 лет и больше - он не может иметь детей. При телосложении "Ожирение-сильное" шанс на продолжение рода может быть только с помощью специалистов (определенных профессий).</p>
                <p>Также, если возраст мужчины больше 45 лет шанс того, что ребенок будет здоровый уменьшается.</p>
                <p>Присутствуют следующие этапы жизни: молодой, взрослый и пожилой.</p>
                <p>У характеристики "Здоровье" есть разные степени проблем: легкая, средняя, тяжелая и критическая.</p>
                <p>Уровень хобби оценивается следующим образом:</p>

                <ul>
                    <li> Дилетант — до 1 месяца</li>
                    <li> Начинающий — от 1 до 4 месяцев</li>
                    <li> Новичок — от 5 месяцев до 1 года</li>
                    <li> Любитель — от 1 до 2 лет</li>
                    <li> Продвинутый — от 2 до 5 лет</li>
                    <li> Мастер (гуру) — больше 5 лет</li>
                </ul>

            </div>
        </div>
    )
}

export default Rules