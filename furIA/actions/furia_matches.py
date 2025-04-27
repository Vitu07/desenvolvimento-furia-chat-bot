import requests
from datetime import datetime, timezone
import pytz

def get_next_furia_match():
    API_TOKEN = 'xqFHFnKz8ur7msHK80sEcSsD7eISp4Atx3qQ0XcZJxnmZfx_Hx4'
    FURIA_ID = 124530
    url = f'https://api.pandascore.co/csgo/matches/upcoming?filter[opponent_id]={FURIA_ID}&page=1&per_page=1&token={API_TOKEN}'

    headers = {"accept": "application/json"}

    try:
        response = requests.get(url, headers)
        response.raise_for_status()
        matches = response.json()
    

        if not matches:
            return "Não há partidas futuras de CS2 para a FURIA. Volte mais tarde!"

        next_match = matches[0]
        begin_at = datetime.fromisoformat(next_match['begin_at'].replace('Z', '+00:00')).replace(tzinfo=timezone.utc)
        timezone_brasilia = pytz.timezone('America/Sao_Paulo')
        match_time = begin_at.astimezone(timezone_brasilia).strftime('%d/%m/%Y às %H:%M')

        team1 = next_match['opponents'][0]['opponent']['name']
        team2 = next_match['opponents'][1]['opponent']['name']
        matchup = f"FURIA vs {team2}" if "FURIA" in team1.upper() else f"{team1} vs FURIA"

        message = (
            f"🔥 **Próximo jogo da FURIA (CS2)** 🔥\n"
            f"🏆 **Campeonato:** {next_match['league']['name']}\n"
            f"⚡ **Confronto:** {matchup}\n"
            f"📅 **Data/Hora:** {match_time} (Horário de Brasília)\n"
            f"🔗 **Transmissão:** {next_match['streams_list'][0]['raw_url'] if next_match.get('streams_list') else 'Link não disponível'}"
        )
        return message

    except requests.exceptions.RequestException as e:
        print(f"Erro na requisição: {e}")
        return "⚠️ Ocorreu um erro ao buscar os jogos. Tente novamente mais tarde!"