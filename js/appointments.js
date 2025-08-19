// Gerenciamento de agendamentos
document.addEventListener('DOMContentLoaded', function() {
    const appointmentForm = document.getElementById('appointment-form');
    const confirmationSection = document.querySelector('.confirmation');
    const appointmentDetails = document.getElementById('appointment-details');
    
    // Ao enviar o formulário
    appointmentForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Coletar dados do formulário
        const service = document.getElementById('service').value;
        const date = document.getElementById('date').value;
        const time = document.getElementById('time').value;
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        
        // Validar dados (validação básica)
        if (!service || !date || !time || !name || !email || !phone) {
            alert('Por favor, preencha todos os campos.');
            return;
        }
        
        // Formatar dados para exibição
        const serviceNames = {
            'consulta': 'Consulta Médica',
            'exame': 'Exames',
            'terapia': 'Terapias'
        };
        
        // Criar objeto de agendamento
        const appointment = {
            service: serviceNames[service] || service,
            date: formatDate(date),
            time: time,
            name: name,
            email: email,
            phone: phone,
            id: generateId()
        };
        
        // Salvar agendamento (em localStorage para demonstração)
        saveAppointment(appointment);
        
        // Mostrar confirmação
        showConfirmation(appointment);
    });
    
    // Formatar data para exibição
    function formatDate(dateString) {
        const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
        return new Date(dateString).toLocaleDateString('pt-BR', options);
    }
    
    // Gerar ID único simples
    function generateId() {
        return Date.now().toString(36) + Math.random().toString(36).substring(2);
    }
    
    // Salvar agendamento (localStorage para demonstração)
    function saveAppointment(appointment) {
        let appointments = JSON.parse(localStorage.getItem('appointments')) || [];
        appointments.push(appointment);
        localStorage.setItem('appointments', JSON.stringify(appointments));
    }
    
    // Mostrar tela de confirmação
    function showConfirmation(appointment) {
        document.querySelector('.booking-form').classList.add('hidden');
        confirmationSection.classList.remove('hidden');
        
        // Preencher detalhes do agendamento
        appointmentDetails.innerHTML = `
            <p><strong>Serviço:</strong> ${appointment.service}</p>
            <p><strong>Data:</strong> ${appointment.date}</p>
            <p><strong>Horário:</strong> ${appointment.time}</p>
            <p><strong>Nome:</strong> ${appointment.name}</p>
            <p><strong>E-mail:</strong> ${appointment.email}</p>
            <p><strong>Telefone:</strong> ${appointment.phone}</p>
            <p><strong>Número do agendamento:</strong> ${appointment.id}</p>
        `;
        
        // Rolando para a seção de confirmação
        confirmationSection.scrollIntoView({ behavior: 'smooth' });
    }
});