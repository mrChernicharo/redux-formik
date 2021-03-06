import { useEffect } from 'react';
import AddProfessionalForm from '../components/Professionals/AddProfessionalForm';
import ProfessionalsList from '../components/Professionals/ProfessionalsList';
import ProfessionalDetail from '../components/Professionals/ProfessionalDetail';

const ProfessionalsPage = (props) => {
    const {
        professionals,
        selectedProfessional,
        availability,
        fetchProfessionals,
        fetchProfessionalAvailability,
        addProfessional,
        isFetchingPatients,
        isSavingProfessional,
        selectProfessional,
        toggleTimeSlotStatus,
    } = props;

    const handleSelectProfessional = (professional) => {
        selectProfessional(professional);
    };

    const handleProfessionalDetailClose = () => {
        selectProfessional(null);
    };

    useEffect(() => {
        !professionals.length && fetchProfessionals();
        return () => selectProfessional(null);
    }, []);

    // useEffect(() => console.log(availability), [availability]);

    return (
        <>
            <h3>Profissionais</h3>

            <AddProfessionalForm
                addProfessional={addProfessional}
                isSavingProfessional={isSavingProfessional}
            />

            {isFetchingPatients ? (
                <div>Loading...</div>
            ) : (
                <ProfessionalsList
                    professionals={professionals}
                    onSelectProfessional={handleSelectProfessional}
                />
            )}

            {selectedProfessional && (
                <ProfessionalDetail
                    professional={selectedProfessional}
                    onClose={handleProfessionalDetailClose}
                    fetchProfessionalAvailability={
                        fetchProfessionalAvailability
                    }
                    toggleTimeSlotStatus={toggleTimeSlotStatus}
                    availability={availability}
                />
            )}
        </>
    );
};
export default ProfessionalsPage;
