/*
  CHAPTER 10 - EXERCISE 2

  ROADS MODULE

  Write a CommonJS module, based on the example from Chapter 7, which
  contains the array of roads and exports the graph data structure representing
  them as roadGraph. It should depend on a module ./graph, which exports a
  function buildGraph that is used to build the graph. This function expects an
  array of two-element arrays (the start and end points of the roads).
*/


// ES module
// ---------
import {buildGraph} from "./graph";

const roads = [
  "Alice's House-Bob's House",   "Alice's House-Cabin",
  "Alice's House-Post Office",   "Bob's House-Town Hall",
  "Daria's House-Ernie's House", "Daria's House-Town Hall",
  "Ernie's House-Grete's House", "Grete's House-Farm",
  "Grete's House-Shop",          "Marketplace-Farm",
  "Marketplace-Post Office",     "Marketplace-Shop",
  "Marketplace-Town Hall",       "Shop-Town Hall"
];

let edges = roads.map(e => e.split("-"));
let roadGraph = buildGraph(edges);
export default roadGraph;
