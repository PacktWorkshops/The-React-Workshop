import ChatService from "./ChatService";

jest.useFakeTimers();

describe(ChatService, () => {
  it("can create a new ChatService", () => {
    const cs = new ChatService();
    expect(cs).not.toEqual(null);
  });

  it("calls the mock function on subscribe", () => {
    const cs = new ChatService();
    const mockFn = jest.fn();
    cs.subscribe(mockFn);
    jest.runOnlyPendingTimers();
    expect(mockFn).toHaveBeenCalled();
  });

  it("does not call the mock function if we unsubscribe", () => {
    const cs = new ChatService();
    const mockFn = jest.fn();
    cs.subscribe(mockFn);
    cs.unsubscribe();
    jest.runOnlyPendingTimers();
    expect(mockFn).not.toHaveBeenCalled();
  });
});
