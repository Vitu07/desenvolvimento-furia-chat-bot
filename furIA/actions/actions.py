from typing import Any, Text, Dict, List
from rasa_sdk import Action, Tracker
from rasa_sdk.executor import CollectingDispatcher
from .furia_matches import get_next_furia_match
from actions.player_info import PlayerInfo

from typing import Any, Text, Dict, List
from rasa_sdk import Action, Tracker
from rasa_sdk.executor import CollectingDispatcher
from .furia_matches import get_next_furia_match

class ActionNextMatch(Action):
    def name(self) -> Text:
        return "action_next_match"

    def run(
        self,
        dispatcher: CollectingDispatcher,
        tracker: Tracker,
        domain: Dict[Text, Any]
    ) -> List[Dict[Text, Any]]:
        
        next_match_info = get_next_furia_match()
        
        dispatcher.utter_message(text=next_match_info)
        
        return []
    

class ActionPlayerSpecific(Action):
    def name(self) -> Text:
        return "action_player_specific"

    def run(self, dispatcher: CollectingDispatcher,
            tracker: Tracker,
            domain: Dict[Text, Any]) -> List[Dict[Text, Any]]:

        player = tracker.get_slot('player')
        print("Valor recebido no slot player:", player)

        player_info = PlayerInfo()

        if not player:
            dispatcher.utter_message(text="Não entendi de qual jogador você está falando. Pode tentar de novo?")
            return []

        jogador_encontrado = player_info.encontrar_jogador(player)

        if jogador_encontrado:
            info = player_info.jogadores_info[jogador_encontrado]
            resposta = f"**{info['nome_real']}** (apelido: **{info['apelido']}**) é {info['posicao']}.\n"
            resposta += f"Títulos principais: {', '.join(info['titulos'])}.\n{info['historia']}"
        else:
            resposta = "Não encontrei informações sobre esse jogador. Pode tentar de novo?"

        dispatcher.utter_message(text=resposta)
        return []