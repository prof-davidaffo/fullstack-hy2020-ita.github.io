import React from 'react';

import ChallengePage from '../components/ChallengePage';

const Challenge = () => (
  <ChallengePage
    lang="it"
    title="Sfida Full Stack | Full Stack open"
    seoDescription="L'Università di Helsinki e Houston Inc. invitano sviluppatori e aziende ad ampliare le proprie competenze nello sviluppo full stack."
    aboutContent={[
      'Il mondo ha un grande bisogno di sviluppatori software. Vogliamo contribuire alla formazione della prossima generazione offrendo, tra le altre iniziative, il corso online Full Stack open.',
      "L'Università di Helsinki e Houston Inc. invitano sviluppatori e aziende a imparare e ad ampliare le proprie competenze con un autentico approccio full stack.",
      "Il nostro obiettivo è favorire l'apprendimento. Offriamo gratuitamente un corso completo e attentamente progettato, accessibile ovunque e in qualsiasi momento.",
      'Il corso è realizzato da sviluppatori per sviluppatori e offre contenuti utili sia a chi si avvicina al settore sia ai professionisti esperti. È richiesta soltanto una solida conoscenza dei fondamenti della programmazione.',
    ]}
    joinContent={[
      "Aderendo alla sfida incoraggi la tua comunità professionale ad acquisire nuove competenze. Il corso interamente online può integrare efficacemente i programmi di formazione interni e l'apprendimento autonomo.",
      "Partecipare comunica all'esterno la competenza tecnica della tua azienda, contribuendo alla reputazione come datore di lavoro e alla visibilità tra i professionisti del software.",
      "L'adesione è gratuita. Il logo delle aziende partecipanti sarà pubblicato sul sito del corso Full Stack open.",
    ]}
  />
);

export default Challenge;
