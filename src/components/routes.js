import App from "./App";
import BotsPage from "./BotsPage";
import BotSpecsArmy from "./BotSpecsArmy";

const routes=[
    {
        path:"/",
        element:<App />,
        Children:[
            {
                path:"/",
                element:<BotsPage />,
                Children:[
                    {
                        path:"/bots/:id",
                        element:<BotSpecsArmy />
                    }
                ]
            }
        ]
    },
    {
        path:"/bots/:id",
        element:<BotSpecsArmy />
    }
]
export default routes