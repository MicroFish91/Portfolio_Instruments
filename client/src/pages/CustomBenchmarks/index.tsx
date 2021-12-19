import React from "react";
import BenchmarkBuilder from "../../components/CardBenchmarkBuilder";
import CustomBenchmark from "../../components/CardCustomBenchmarks";

interface CustomBenchmarkProps {}

const CustomBenchmarks: React.FC<CustomBenchmarkProps> = () => {
  return (
    <>
      <div className="card">
        <div className="row">
          <div className="col-md-12 col-lg-12">
            <div className="card card-body p-6 about-con pabout">
              <h2 className="mb-4 font-weight-semibold">
                <u>Custom Benchmarks</u>
              </h2>
              <p className="leading-normal">
                Selecting a benchmark portfolio is the first step of the
                portfolio building process. You may use this page to customize
                your own portfolio benchmarks.
              </p>
              <p className="leading-normal">
                Portfolio benchmarks that you have previously customized will be
                listed here for you to select.
              </p>
            </div>
          </div>
        </div>
      </div>

      <BenchmarkBuilder />
      <CustomBenchmark
        benchmarkTitle="Golden Butterfly"
        benchmarkDescription="A happy-go-lucky portfolio"
        assetCategories={["cat1", "cat2"]}
        assetPercentages={[50, 50]}
      />
    </>
  );
};

export default CustomBenchmarks;
