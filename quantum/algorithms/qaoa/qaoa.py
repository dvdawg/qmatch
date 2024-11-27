from qiskit import Aer, execute
from qiskit.circuit import Parameter
from qiskit.algorithms.optimizers import COBYLA
from qiskit.quantum_info import Pauli
from qiskit.opflow import I, Z, X, StateFn, CircuitStateFn, SummedOp
import networkx as nx
import numpy as np

def maxcut_cost_operator(graph):
    # cost operator for max cut generation
    terms = []
    for edge in graph.edges():
        i, j = edge
        terms.append(0.5 * (I ^ i) ^ (Z ^ j) + 0.5 * (Z ^ i) ^ (I ^ j))
    return SummedOp(terms)

def mixer_operator(num_qubits):
    # mixer operator generation
    terms = [X ^ i for i in range(num_qubits)]
    return SummedOp(terms)


def qaoa_circuit(graph, p, params):
    num_qubits = len(graph.nodes())
    gamma = params[:p]
    beta = params[p:]

    cost_op = maxcut_cost_operator(graph)
    mixer_op = mixer_operator(num_qubits)

    # circuit init
    qaoa = CircuitStateFn()

    # applying alternating operators
    for i in range(p):
        qaoa = (StateFn(cost_op * gamma[i]) @ qaoa).reduce()
        qaoa = (StateFn(mixer_op * beta[i]) @ qaoa).reduce()

    return qaoa.to_circuit()

def evaluate_cost(graph, params):
    p = len(params) // 2
    qaoa = qaoa_circuit(graph, p, params)

    # circuit sim
    backend = Aer.get_backend('statevector_simulator')
    result = execute(qaoa, backend).result()
    statevector = result.get_statevector()

    # cost operator expectation value
    cost_op = maxcut_cost_operator(graph)
    cost = np.real((statevector.T @ cost_op @ statevector))
    return cost

graph = nx.Graph()
graph.add_edges_from([(0, 1), (1, 2), (2, 3), (3, 0)])

# params
p = 2  # number of qaoa layers
params = np.random.random(2 * p)  # init params
optimizer = COBYLA()

result = optimizer.optimize(
    num_vars=2 * p,
    objective_function=lambda params: -evaluate_cost(graph, params),  # cost maximization
    initial_point=params
)

print("Optimized parameters:", result[0])
print("Final cost:", -result[1])
