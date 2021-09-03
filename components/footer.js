export default function Footer() {
  return (
    <footer className="grid w-full divide-y-[1px] divide-gray-300  bg-gray-100 text-sm text-gray-500">
      <div className="px-8 py-3">
        <p>United Kingdom</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 grid-flow-row-dense px-8 py-3">
        <div className="text-center md:col-span-2 lg:col-span-1 lg:col-start-2">
          Carbon neutral since 2007
        </div>
        <div className="flex justify-center md:justify-self-start space-x-8 whitespace-nowrap">
          <p>Advertising</p>
          <p>Business</p>
          <p>How Search works</p>
        </div>
        <div className="flex justify-center md:ml-auto space-x-8">
          <p>Privacy</p>
          <p>Terms</p>
          <p>Settings</p>
        </div>
      </div>
    </footer>
  );
}
