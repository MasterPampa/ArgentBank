import { applyMiddleware, createStore } from 'redux';
import reducer from './reducers';
import thunk from 'redux-thunk'
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// Configuration de la persistance
const persistConfig = {
    key: 'root', // Clé racine pour l'état persisté
    storage, // Utiliser le stockage par défaut (localStorage pour le web)
};
const persistedReducer = persistReducer(persistConfig, reducer);

// Création du store
const store = createStore(persistedReducer, applyMiddleware(thunk));

// Persiste l'état du store
const persistor = persistStore(store);

// Abonnement pour afficher les mises à jour de l'état
const handleStateChange = () => {
    const currentState = store.getState();
    console.log('state updated', currentState);
};
store.subscribe(handleStateChange);

export { store, persistor };
