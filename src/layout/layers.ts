// Some utility methods used to determine the layers (or z-indexes) of different components
// Eventually, we can use react context to provide information about
// where to place different layers of the UI
// For now, we're just constants

export enum layers {
  FlyOver = 100,
  Dialog = 200,
  Alert = 300
}
