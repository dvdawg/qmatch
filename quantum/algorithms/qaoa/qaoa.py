from qiskit import QuantumCircuit, Aer, execute

def create_superposition():
    qc = QuantumCircuit(1)
    qc.h(0) # hadamard gate
    qc.measure_all()
    simulator = Aer.get_backend('qasm_simulator')
    job = execute(qc, simulator, shots=1024)
    result = job.result()
    return result.get_counts()
