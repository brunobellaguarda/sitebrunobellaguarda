// site_dr_bruno_inicio_expandido

import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

function Home() {
  return (
    <div className="p-6 text-center">
      <h1 className="text-4xl font-bold mb-4">Dr. Bruno Bellaguarda</h1>
      <p className="text-xl mb-6">Ortopedista Especialista em Cirurgia do Joelho</p>
      <Link
        to="/contato"
        className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700"
      >
        Agende sua Consulta
      </Link>
    </div>
  );
}

function Sobre() {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-3xl font-semibold mb-4">Sobre o Dr. Bruno</h2>
      <p className="text-lg mb-2">
        Médico ortopedista com formação em cirurgia do joelho, comprometido com o cuidado
        individualizado dos pacientes e com as mais modernas técnicas cirúrgicas.
      </p>
      <p className="text-lg">
        Atende casos de artrose, lesões ligamentares, instabilidade patelar e outras
        patologias do joelho.
      </p>
    </div>
  );
}

function Contato() {
  return (
    <div className="p-6 max-w-xl mx-auto">
      <h2 className="text-3xl font-semibold mb-4">Contato</h2>
      <p className="mb-2">📍 Endereço: Rua Exemplo, 123 - Manaus/AM</p>
      <p className="mb-2">📞 Telefone: (92) 99999-9999</p>
      <p className="mb-2">📧 E-mail: contato@drbrunobellaguarda.com</p>
      <a
        href="https://wa.me/5592999999999"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-block bg-green-600 text-white px-4 py-2 rounded-xl hover:bg-green-700"
      >
        Fale pelo WhatsApp
      </a>
    </div>
  );
}

function Servicos() {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-3xl font-semibold mb-4">Serviços</h2>
      <ul className="list-disc pl-6 text-lg space-y-2">
        <li>Consulta ortopédica presencial</li>
        <li>Consulta online e segunda opinião</li>
        <li>Cirurgias ortopédicas do joelho</li>
        <li>Tratamento conservador e reabilitação</li>
      </ul>
    </div>
  );
}

function AreasAtuacao() {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-3xl font-semibold mb-4">Áreas de Atuação</h2>
      <ul className="list-disc pl-6 text-lg space-y-2">
        <li>Artrose do joelho</li>
        <li>Lesões do Ligamento Cruzado Anterior (LCA)</li>
        <li>Instabilidade patelar</li>
        <li>Lesões meniscais</li>
        <li>Artroplastia total do joelho</li>
      </ul>
    </div>
  );
}

function Formulario() {
  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h2 className="text-3xl font-semibold mb-4">Formulário Pré-Consulta</h2>
      <p className="text-lg mb-4">Clique abaixo para preencher os escores funcionais:</p>
      <ul className="list-disc pl-6 text-blue-600 space-y-2">
        <li><a href="https://forms.gle/seu-formulario-womac" target="_blank">WOMAC</a></li>
        <li><a href="https://forms.gle/seu-formulario-koos" target="_blank">KOOS</a></li>
        <li><a href="https://forms.gle/seu-formulario-ikdc" target="_blank">IKDC</a></li>
        <li><a href="https://forms.gle/seu-formulario-sf36" target="_blank">SF-36</a></li>
        <li><a href="https://forms.gle/seu-formulario-lysholm" target="_blank">Lysholm</a></li>
      </ul>
    </div>
  );
}

function Navbar() {
  return (
    <nav className="bg-gray-100 p-4 shadow">
      <ul className="flex flex-wrap justify-center gap-6 text-lg">
        <li><Link to="/">Início</Link></li>
        <li><Link to="/sobre">Sobre</Link></li>
        <li><Link to="/servicos">Serviços</Link></li>
        <li><Link to="/atuacao">Áreas de Atuação</Link></li>
        <li><Link to="/formulario">Formulários</Link></li>
        <li><Link to="/contato">Contato</Link></li>
      </ul>
    </nav>
  );
}

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/servicos" element={<Servicos />} />
        <Route path="/atuacao" element={<AreasAtuacao />} />
        <Route path="/formulario" element={<Formulario />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
    </Router>
  );
}
