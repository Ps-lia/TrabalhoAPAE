import React, { useState } from "react";
import moment from "moment";
import { Calendar, momentLocalizer } from "react-big-calendar";
import { useNavigate } from "react-router-dom";
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import "./componentsCalendario/Components-Calendario-css.css";
import "../Cadastro/componentsCadastro/Components-Cadastro-css.css";

import eventosPadrao from "./componentsCalendario/eventosPadrao.js";
import EventModal from "./componentsCalendario/ModalEvent/EventModal.js";
import Adicionar from "./componentsCalendario/adicionar/Adicionar.js";
import CustomTollbar from "./componentsCalendario/CustomCalendar/CustomToolbar.js";
import FiltroAtividades from "./componentsCalendario/filtro/FiltroAtividades.js";

// Importando o locale pt-br
import "moment/locale/pt-br";

const DragAndDropCalendar = withDragAndDrop(Calendar);

// Configurando o localizador do momento para pt-br
const localizer = momentLocalizer(moment);

function Calendario() {
  const [eventos, setEventos] = useState(eventosPadrao);
  const [eventoSelecionado, SeteventoSelecionado] = useState(null);
  const [eventosFiltrados, setEventosFiltrados] = useState(eventosPadrao);

  const navigate = useNavigate();

  const eventStyle = (event) => ({
    style: {
      backgroundColor: event.color,
    },
  });

  const moverEventos = (data) => {
    const { start, end } = data;
    const updatedEvents = eventos.map((event) => {
      if (event.id === data.event.id) {
        return {
          ...event,
          start: new Date(start),
          end: new Date(end),
        };
      }
      return event;
    });
    setEventos(updatedEvents);
  };

  const handleEventClick = (evento) => {
    SeteventoSelecionado(evento);
  };

  const handleEventClose = () => {
    SeteventoSelecionado(null);
  };

  const handleAdicionar = (novoEvento) => {
    // Lógica do banco
    setEventos([...eventos, { ...novoEvento, id: eventos.length + 1 }]);
  };

  const handleEventDelete = (eventId) => {
    // Lógica do banco
    const updatedEvents = eventos.filter((event) => event.id !== eventId);
    setEventos(updatedEvents);
    SeteventoSelecionado(null);
  };

  const handleEventUpdate = (updatedEvent) => {
    // Lógica do banco
    const updatedEvents = eventos.map((event) => {
      if (event.id === updatedEvent.id) {
        return updatedEvent;
      }
      return event;
    });
    setEventos(updatedEvents);
    SeteventoSelecionado(null);
  };

  const handleSelecionarAtividades = (atividadesSelecionadas) => {
    setEventosFiltrados(atividadesSelecionadas);
  };

  const handleNavigateToCadastro = () => {
    navigate("/cadastro");
  };

  const handleNavigateToInicio = () => {
    navigate("/inicio");
  };

  return (
    <div className="tela ">
      <div
        className="toolbar p-4"
        style={{ maxHeight: "100vh", overflowY: "auto" }}
      >
        <Adicionar onAdicionar={handleAdicionar} />

        <FiltroAtividades
          atividades={eventos}
          onSelecionarAtividades={handleSelecionarAtividades}
        />

        <button onClick={handleNavigateToCadastro} className="botao-cadastro">
          Ir para Cadastro
        </button>
        <button className="botao-cadastro" onClick={handleNavigateToInicio}>
          Voltar ao Início
        </button>
      </div>

      <div className="calendario">
        <DragAndDropCalendar
          defaultDate={moment().toDate()}
          defaultView="month"
          events={eventosFiltrados}
          localizer={localizer}
          resizable
          onEventDrop={moverEventos}
          onEventResize={moverEventos}
          onSelectEvent={handleEventClick}
          eventPropGetter={eventStyle}
          components={{
            toolbar: CustomTollbar,
          }}
          className="calendar"
          culture="pt-br" // Alterando para pt-br
        />
      </div>
      {eventoSelecionado && (
        <EventModal
          evento={eventoSelecionado}
          onClose={handleEventClose}
          onDelete={handleEventDelete}
          onUpdate={handleEventUpdate}
        />
      )}
    </div>
  );
}

export default Calendario;
